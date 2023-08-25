import React from 'react'

export default function Email() {
    const [emailData, setEmailData] = useState({
        to: [],
        subject: '',
        text: '',
      });
    
      const handleSendEmail = () => {
        axios.post('http://localhost:3001/send-email', emailData)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      };
    
      
      return (
        <div className="App">
          <input
            type="email"
            placeholder="Recipient Emails (comma-separated)"
            value={emailData.to.join(',')}
            onChange={(e) => setEmailData({ ...emailData, to: e.target.value.split(',') })}
          />
          <input
            type="text"
            placeholder="Subject"
            value={emailData.subject}
            onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
          />
          <textarea
            placeholder="Email Text"
            value={emailData.text}
            onChange={(e) => setEmailData({ ...emailData, text: e.target.value })}
          />
          <button onClick={handleSendEmail}>Send Email</button>
        </div>
      );
    }
    
