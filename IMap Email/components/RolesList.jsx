import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RolesList() {
  const [roles, setRoles] = useState([]);
  const [mailsByRole, setMailsByRole] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch roles on mount
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/mail/roles");
        const rolesData = await res.json();
        setRoles(rolesData);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, []);

  // Whenever roles change, fetch mails per role
  useEffect(() => {
    if (roles.length === 0) {
      setLoading(false);
      return;
    }

    const fetchMailsForRoles = async () => {
      setLoading(true);
      const mailsData = {};

      for (const role of roles) {
        try {
          const res = await fetch(
            `http://localhost:8080/api/mail/by-role?role=${encodeURIComponent(role)}`
          );
          const mails = await res.json();
          mailsData[role] = mails.reverse();
        } catch (error) {
          console.error(`Error fetching mails for role ${role}:`, error);
          mailsData[role] = [];
        }
      }

      setMailsByRole(mailsData);
      setLoading(false);
    };

    fetchMailsForRoles();
  }, [roles]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (roles.length === 0)
    return <p className="text-center mt-10">No roles found.</p>;

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Mails by Roles</h2>

      {roles.map((role) => (
        <section key={role} className="mb-8">
          <h3 className="text-xl font-bold mb-2">{role}</h3>
          {(!mailsByRole[role] || mailsByRole[role].length === 0) ? (
            <p className="text-gray-600">No mails found for this role.</p>
          ) : (
            <table className="min-w-full divide-y divide-gray-200 border rounded shadow-sm overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2">Sender</th>
                  <th className="px-4 py-2">Subject</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {mailsByRole[role].map((mail) => (
                  <tr
                    key={mail.id}
                    className="hover:bg-gray-100 cursor-pointer"
                  >
                    <td className="px-4 py-2 font-medium">{mail.sender}</td>
                    <td className="px-4 py-2">
                      <Link to={`/mail/${mail.id}`} className="text-blue-600 hover:underline">
                        {typeof mail.subject.subject === "string"
                          ? mail.subject.subject.length > 50
                            ? mail.subject.subject.slice(0, 50) + "..."
                            : mail.subject.subject
                          : "(Invalid Subject)"}

                        <div className="text-gray-500 text-sm">
                          {typeof mail.summary === "string"
                            ? mail.summary.slice(0, 80) + "..."
                            : ""}
                        </div>
                      </Link>
                    </td>
                    
                    <td className="px-4 py-2 text-right text-sm text-gray-500">
                      {new Date(mail.receivedDate).toLocaleDateString()}{" "}
                      {new Date(mail.receivedDate).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      ))}
    </div>
  );
}
