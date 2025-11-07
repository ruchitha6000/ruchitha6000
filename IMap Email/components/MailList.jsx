import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function MailList() {
  const { role } = useParams(); // role comes from URL param if exists
  const [mails, setMails] = useState([]);

  const fetchMails = async () => {
    // Format role param to match backend roles, e.g. "java-developer" => "Java Developer"
    const formattedRole = role
      ? role.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")
      : null;

    const url = formattedRole
      ? `http://localhost:8080/api/mail/by-role?role=${encodeURIComponent(formattedRole)}`
      : "http://localhost:8080/api/mail/all";

    const res = await fetch(url);
    const data = await res.json();
    setMails(data.reverse());
  };

  useEffect(() => {
    fetchMails();
  }, [role]);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">
          {role
            ? `Inbox - ${role
                .split("-")
                .map((w) => w[0].toUpperCase() + w.slice(1))
                .join(" ")}`
            : "Inbox"}
        </h2>
        <button
          onClick={fetchMails}
          className="flex items-center gap-1 text-gray-600 hover:text-black"
        >
          Refresh
        </button>
      </div>

      <div className="border rounded shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 ">Sender</th>
              <th className="px-4 py-2 ">Subject</th>
              <th className="px-4 py-2 ">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {mails.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-4 py-4 text-center">
                  No emails found.
                </td>
              </tr>
            ) : (
              mails.map((mail) => (
                <tr
                  key={mail.id}
                  className="hover:bg-gray-100 cursor-pointer"
                >
                  <td className="px-4 py-2 font-medium">{mail.sender}</td>
                  <td className="px-4 py-2">
                    <Link
                      to={`/mail/${mail.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {mail.subject?.subject
                        ? mail.subject.subject.length > 50
                          ? mail.subject.subject.slice(0, 50) + "..."
                          : mail.subject.subject
                        : "(No Subject)"}

                      <div className="text-gray-500 text-sm">
                        {typeof mail.summary === "string" ? mail.summary.slice(0, 80) + "..." : ""}
                      </div>
                    </Link>
                  </td>

                  <td className="px-4 py-2 text-right text-sm text-gray-500">
                    {mail.receivedDate
                      ? new Date(mail.receivedDate).toLocaleDateString()
                      : "N/A"}{" "}
                    {mail.receivedDate
                      ? new Date(mail.receivedDate).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : ""}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
























// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function MailList() {
//   const [mails, setMails] = useState([]);

//   const fetchMails = async () => {
//     const res = await fetch("http://localhost:8080/api/mail/all");
//     const data = await res.json();
//     setMails(data.reverse());
//   };

//   useEffect(() => {
//     fetchMails();
//   }, []);

//   return (
//     <div className="w-full max-w-5xl mx-auto">
//       {/* Top bar */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-2xl font-semibold">Inbox</h2>
//         <button
//           onClick={fetchMails}
//           className="flex items-center gap-1 text-gray-600 hover:text-black"
//         >
//         </button>
//       </div>

//       <div className="border rounded shadow-sm overflow-hidden">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-4 py-2 ">Sender</th>
//               <th className="px-4 py-2 ">Subject</th>
//               <th className="px-4 py-2 ">Date</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-100">
//             {mails.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="px-4 py-4 text-center">
//                   No emails found.
//                 </td>
//               </tr>
//             ) : (
//               mails.map((mail) => (
//                 <tr
//                   key={mail.id}
//                   className="hover:bg-gray-100 cursor-pointer"
//                 >
//                   <td className="px-4 py-2 font-medium">{mail.sender}</td>
//                   <td className="px-4 py-2">
//                     <Link
//                       to={`/mail/${mail.id}`}
//                       className="text-blue-600 hover:underline"
//                     >
//                       {mail.subject?.subject
//                         ? mail.subject.subject.length > 50
//                           ? mail.subject.subject.slice(0, 50) + "..."
//                           : mail.subject.subject
//                         : "(No Subject)"}

//                       <div className="text-gray-500 text-sm">
//                         {typeof mail.summary === "string" ? mail.summary.slice(0, 80) + "..." : ""}
//                       </div>
//                     </Link>
//                   </td>


//                   <td className="px-4 py-2 text-right text-sm text-gray-500">
//                     {/* {new Date(mail.receivedDate).toLocaleDateString()}{" "}
//                     {new Date(mail.receivedDate).toLocaleTimeString([], {
//                       hour: "2-digit",
//                       minute: "2-digit",
//                     })} */}

//                     {mail.receivedDate
//                       ? new Date(mail.receivedDate).toLocaleDateString()
//                       : "N/A"}{" "}
//                     {mail.receivedDate ? new Date(mail.receivedDate).toLocaleTimeString([], {
//                           hour: "2-digit",
//                           minute: "2-digit",
//                         }): ""
//                     }
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
