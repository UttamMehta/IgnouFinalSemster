import React,{useState} from 'react';
import axios from 'axios';
import styles from "./Email.module.css"

export default function Email() {
    const [emailData, setEmailData] = useState({
        to: [],
        subject: '',
        text: '',
      });
    
      const handleSendEmail = () => {
        axios.post('http://localhost:3001/sendemail', emailData)
          .then(response => {
            console.log(response.data);
            alert(response.data);
          })
          .catch(error => {
            console.error(error);
            alert("some error occur try later");
          });
      };
    

      return (
        <div className={styles.email}>
            <div className={styles.email_form}>
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
          <button className={styles.send_button} onClick={handleSendEmail} disabled={emailData.to.length>0&&emailData.subject&&emailData.text?false:true}>Send Email</button>
        </div>
        </div>
      );
    }
    
