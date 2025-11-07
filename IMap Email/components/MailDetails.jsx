import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function MailDetails() {
  const { id } = useParams();
  const [mail, setMail] = useState(null);

  useEffect(() => {
    const fetchMail = async () => {
      const res = await fetch(`http://localhost:8080/api/mail/${id}`);
      const data = await res.json();
      setMail(data);
    };
    fetchMail();
  }, [id]);

  if (!mail) return <p>Loading...</p>;

  // ✅ Split summary lines safely
  const lines = mail.summary ? mail.summary.split("\n").filter(line => line.trim() !== "") : [];


  const handleDownload = (attachmentId) => {
  fetch(`http://localhost:8080/api/mail/attachments/${attachmentId}/download`)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.blob().then(blob => ({ blob, response }));
    })
    .then(({ blob, response }) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;

      // Extract filename from content-disposition header
      const contentDisposition = response.headers.get('content-disposition');
      let fileName = 'file';
      if (contentDisposition) {
        const match = contentDisposition.match(/filename="(.+)"/);
        if (match && match.length === 2) fileName = match[1];
      }
      a.download = fileName;

      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    })
    .catch(err => {
      console.error('Error downloading file:', err);
    });
};




  return (
  <div className="bg-white p-6 rounded shadow-sm max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold mb-2">
      {typeof mail.subject.subject === "string" ? mail.subject.subject : "(No Subject)"}
    </h2>
    <p className="text-gray-600 mb-1">
      From: {typeof mail.sender === "string" ? mail.sender : JSON.stringify(mail.sender)}
    </p>
    <p className="text-gray-500 mb-4">
      Received: {new Date(mail.receivedDate).toLocaleString()}
    </p>

    <p>
      <strong>Attachments:</strong>{" "}
      {Array.isArray(mail.attachmentNames)
        ? mail.attachmentNames.join(", ")
        : typeof mail.attachmentNames === "object"
        ? JSON.stringify(mail.attachmentNames)
        : mail.attachmentNames || "None"}
    </p>

    <p className="mb-4">
    {mail.subject?.id && (
      <button
        onClick={() => handleDownload(mail.subject.id)}
        className="mt-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-green-700"
      >
        ⬇️ <b>Download Attachment</b>
      </button>
    )}
    </p>

    <div className="bg-gray-100 p-4 py-2 rounded space-y-2">
      {typeof mail.summary === "string"
        ? lines.map((line, idx) => {
            const [label, ...rest] = line.split(":");
            const value = rest.join(":").trim();
            return (
              <p key={idx}>
                <strong>{label}:</strong> {value || "None"}
              </p>
            );
          })
        : <p>No summary available</p>}
    </div>

    {/* {mail.attachmentId && (
        <button
          onClick={() => handleDownload(mail.attachmentId)}
          className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          ⬇️ Download Attachment
        </button>
      )} */}


    <pre className="text-xs mt-4 text-gray-400">{JSON.stringify(mail, null, 2)}</pre>

    <Link to="/" className="inline-block mt-4 text-blue-600 hover:underline">
      ← Back to Inbox
    </Link>
  </div>
);
}





























// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// export default function MailDetails() {
//   const { id } = useParams();
//   const [mail, setMail] = useState([]);

//   useEffect(() => {
//     const fetchMail = async () => {
//       const res = await fetch(`http://localhost:8080/api/mail/${id}`);
//       const data = await res.json();
//       setMail(data);
//     };
//     fetchMail();
//   }, [id]);

//   if (!mail) return <p>Loading...</p>;

//   return (
//     <div className="bg-white p-6 rounded shadow-sm">
//       <h2 className="text-xl font-bold mb-2">{mail.subject}</h2>
//       <p className="text-gray-600 mb-1">From: {mail.sender}</p>
//       <p className="text-gray-500 mb-4">
//         Received: {new Date(mail.receivedDate).toLocaleString()}
//       </p>
//       <p className="mb-2">
//         <strong>Attachments:</strong> {mail.attachmentNames || "None"}
//       </p>
//       <div className="bg-gray-100 p-4 rounded">
//         <pre className="whitespace-pre-wrap">{mail.summary}</pre>
//       </div>
//       <Link
//         to="/"
//         className="inline-block mt-4 text-blue-600 hover:underline"
//       >
//         ← Back to Inbox
//       </Link>
//     </div>
//   );
// }
