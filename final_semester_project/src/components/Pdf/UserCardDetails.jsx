import React, { useState } from 'react';
import { saveAs } from 'file-saver';
// import PdfTemplate from './PdfTemplate';
import jsPDF from "jspdf"

const UserCardDetails = () => {
  const [user,setUser]=useState({email:"Uttam@gmail.com",name:"Uttam"})
  // const handleDownloadPDF = () => {
  //   // Create a PDF blob from the PDF template component
  //   const pdfBlob = PdfTemplate().blob();

  //   // // Save the blob as a PDF file using file-saver
  //   // saveAs(pdfBlob, 'user_details.pdf');
  // };


  // Function to generate and download PDF
  const downloadPDF = () => {
    const pdf = new jsPDF();
    const userDetails = {
      name: "John Doe",
      fatherName: "Jane Doe",
      dob: "January 1, 1990",
      gender: "Male",
      photo: "path/to/passport-photo.jpg",
      signature: "path/to/signature.jpg",
      universityLogo: "path/to/university-logo.jpg",
    };
    pdf.text(20, 20, "User Details Card");
    pdf.text(20, 30, `Name: ${userDetails.name}`);
    pdf.text(20, 40, `Father's Name: ${userDetails.fatherName}`);
    pdf.text(20, 50, `Date of Birth: ${userDetails.dob}`);
    pdf.text(20, 60, `Gender: ${userDetails.gender}`);

    // const imagesDiv = document.querySelector(".images");
    // const images = imagesDiv.getElementsByTagName("img");
    let offsetY = 80;
    const images=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAB7CAMAAACb+fS6AAAAeFBMVEX///88K5nv7vbz8vjq6fMAAIr29fpENJz5+fzRzuQ6KJj9/P7n5fHj4e+rps+8uNidl8exrNKTjMLKx+B2bbPa2OpkWaqOh79aTqbBvdsvGZVrYa6AeLimocxNP6A3I5hTRqMdAJBJOp8pD5OHf7xvZq9gVKkAAINoYThLAAARn0lEQVRogdVaiXLrqrJFs9DIqBEkoSn//4evkezYcpK9k3NObtUjVY6tgYYeVq8GEPr/0PBKdkUGwtL/kcCa67VmfdvL/428cGoLjty2LotflyWLIkeSkoK4pCRUobgs6C/K80SKCN0LSfdWCam3gkiEya/J41QXoaaiXGuii3Ulimju17T0f0detqVSFIz2zIrThGWKkKImbvtLc8QU+0yzduVFsYYFI+WkedVSn2D3N+S5mjPdl4wwVjYhDouBC8JKtrGS/467ajKvJVGU9CWfArPjuljphvUk1uxXBKKyIH1FNNVGtC3mTV9oqnaY9K8hTlsQxVk5F3oVBNBGFCWrKfklJ7WNiqJlSjGBdatXMB9r6+03EVWRQhDRC0Xrdteg343Q5pcMeDRCBVHT2uuStPXK9oYoRvEvCmTruuqm31RRF2qttl6TRuW/KJCvZGXNutGNkF6xSjDF1l+Uh1Ih6lU1vYAEvDWiUqRffzNbpCFhq9DNTvceXLQSpNLq14Rh0o+m2tlG13ZTiTKtKmuxiqqm/70V3aJ66+oWIpw3tUdCdw8Ggkosq83lugqMKOP/TlpM5zdRhuePnMi4zGSJMAaBSJ8WxGx569v/RpwUb9VTV3nhI4oxR5x7JENl+f4cMwH79xjAJ8MuyS4kLmp11iNd4MJN+fO02irY/h2Rw82iw5drMK1VyR1RxXsZ8yvMyC0Q/9yD8m0h3oerZS5XosGGqxQsbl+7l5VhH1/6TovJok6TeBfLlBlpMS1QqbN2lfKjCvkwlh8u/r3JYbhra4qeXF6yrCpasiKuynJvW/IxOaXFIn5McnRw9uSG9vs7eoW0aGUkSrkiSUq6C7fG12g4xpZVHf+RuLgy5wvZIuCXM989hytdKqWEEDkVSihF6Vq/z59vSjfqUAwJ2A/k5eNwqET23WJgdkVwsrKwH0UlqmqfiGwx7vemEX0vorvjTFHdLeJ8GJvq29iDA3H8bw3jeRPkKI6cYwCkHlZJW4nzlmpCU162lJJIiduL5UJov4MFrXo8x/mmIcvgJNLhPM8DSk0XIjoezliRgsqyxBmmogbl4hDclbRkv8VBaYQz0Lg3ZwapzLdCUt/0BwIH0gQND6rzt1uIOq0zLnEL9aEma6s9xEsWF+Lmz/zNR4a6yXRTpvqOxCIoUTlZtxSNHAkPyvJ4q92DXtWIuRnyJQbGVrNShrlEBOl11Kf2WDAHdDOgDjnZK3XyV63SoMyj8WDSURQ5eRFYcSkd58JDPcuhHCwAtqG4IEUuJUR/7etKD6Y+0EGS9tCQ7MxhhHX6i+dwQ3PDUFbvGlIOGc1ktdU6Q2ujkipNCAWF5nFb0swrKTRGAQVSvt9APh36FMmxu2lZ9H+UJw2J5xVps4nDc9wsPqKYxii13REICiXqja16hZpGrWIDeiMOn+F7p+1/10PYyvOw1U1c/YmCeKMAn/G1wTDHu73B9ayslFkgj1OVDPsueqVWVVXNMJIUxtTSHG6WznDoMVusPCc4XnSdPxSPFSAKxjLAiAfs1Em8BicSS9EKbYsIP7N/Z/P9s6yI5VbDv7AO7CRTDXHIg1b2EdyWwZdQrg8HQRDHXHdRYuHMn5LbTMta9zmpuVXflTSlOVMF2w/vwEacXuIR25mwEUWDL3hAdmJ0OBD5RobaPiu7/e5lWU5ad6O0Vxp7d8aUxuC2AK1xS9szeuN9Pn1nTIYWZYev9vPnAqebQ1VdtTBlhtWO9+k+R0CkNn/N2VqtjAmG3JroyceaaMiS92mo5Zg/mD6IwsmAPr1D0R8afbulBF+tzdvUBjUO6usjoYdoo9BWqLQlDAzlu9tqmdslKbITX0AU1stiDVi+fVJBesYOI67VcS+1jhB85l85Ri2fUdlOFqFpzz+Ovl7cY4pZH2zeRXmXpxL72c/dXtBjvL6pPz51a+DBGf6an4nB9jAeqe0c5duHfJwF9lK2FPUSGZs740i8PvPtFk822kvrp0VyRLGaXpmImuCjUL2jHU9ZBYjplR/+rfkyf3fpY2427JOt6nI7nxdanh+UQps8pgIwGozzvVx2bx5njdMzcV9fKM+QdluQVncwO9Vcp7jaCaJw3P0UrJ0jN/hB1RfKtQF+k8vQ89ntvb6Bj3QypkBpRCxKXxiz253ww5dx2xeYfb9/XxydAxl7eKQl6HC9rbv5VofhuBIQREe4sF9cgo43kpDXOwNl4LdvKNTLbWrmCuNFlbKciI5BbWQ5JZIFPiBhbAP0hixBeo7F5iUCoq8j4r21OpKrVgcCml3WBVdiImtPTzKeHn7TTqbjLLDDG5+MlJtrTLXB3xmeP1Jc71uXNFzK1azapSsXRcW26ETVwsAHj9rQnCRQPVlJz1cXGr4xQUZ0QljnOHWxFrEyTRVIVBQZX8wNoO5+dys/uHkkjemKYTj4BqHcwUpTSRZjRDtT1iXJqPJmMUsy3oxFossL3qPEyV40Kr6BMdxUndjKfucaqqxNN6PjdMvgJIlT35NAcK0dt+3+rXUuBZ33FDJxW3wKmek0JiNMTq/wTF56soILUTc005izO0T1VzpDk/uN+orl5fJu0ZzmLrl7V1uUmrdWfoxp2RjV+uvi28wS08aJRhyLJUyVXu7+33YXdHy45nA14UOjnkZkp9XZgSyRHwW6ZEXJZAyM0Urehb1ZY1BlkoGqoOjX7yDsXdHFc25GjJfPr1vuQgO19wKlEpeT3y6WAeDW94th6QBVKMoUYCFiPEqSKPcVFFON86jTmmvJ1tf3qV7ycf6AbQqZjTf9wAruZwM2SW3dN1tHMxow3pHA0rDI62p0kqkyKq37yDwCnFQXgWtz/ufORdVl8m5CgsgWZFWeo9CXUb/MOESxHruuLqDuJZ3BuYvrgEvugI+ussLBniyP4fOrNxbJbR7XzLE+hsVyOZusYUCziwYbhqnUzjJGzK6u+Ysz7lhqt21Rb2cYIh7mgMZPylouBBGbM77J4aSYkPIQ3D8Ur1VZQA0MpB5YPfdJz8YlSXYf+ahCa+d0Pto0lTRcYIYRsd0BtXvMKuzkreujNMnPJImUsu72Ng6B9ap0etjA60tuHAgGWxKigk+AZE7SqF6Mb3JOHOiAd1HdoiZxHLBdWlYGku5jTgmkda95G+fAOqZ781pwnrSBsWSoBzj0kie+U0t5c6F44CSAbqEtDHUt7sbRgubaJV2B9sRJZirM0oF6nqY4wyAmSPpe2sPg3OX0/4ZAIYBLYyrkCOR3jyAJaU1vhkb90jln6zhSFM2OUMivFhDlgJPCzDv4TIBkp48pNhoyj6TGbJaTed2pvAnC2/GjxDGYzbHfPbAs1XVxRwFhO4XOnVHIuYutb9qsOkzJcdXeMyP4UbOW6/sUIRCZk3bQNbCQ9J4SB42Kzu+7MXCB6vjLE3iSdb8toce77TWZIrAV7nUZ6K1EHiV8vM07WSYel8YZt5XzJ4G6CyfbtdjfczAkp9wQV/Ut/ANvf1JpM5qbz7qzFTjitSlWt2eL1ta3i550x/SSzils0gYfS0xb3tOb7TqwXXModd9VCjaESk3JnC4QS+74cJps3G4rvijrzn7HMRoXUhtu19+yBuxmY3BJ2C3cV3jCI3fCMBd2TWrNoesGul7Ozg6Io7MxnVV+GD3qxzRDxQ3nyN1lrF59xah/aABcpt/H4bHdFY8TVDf3X0dftuvRdu3f0sV6+EWcy7Owa56rE8yu8gDWunGftXPovYCAT6rKPEVeYVm+vkFXemorzeXhRv4txPQVYsVT2uSnj7rbcs6tq+p13dbSEutQKGvXROAkeXAuf2VbTG82dJdL9pY3aCvnC0cj0/vX+MRFOh4I0y1jb5/ERdMBI3PHEZJgMviyfuYSsTDJHRzlNQ+V401t3YUz8eU9jHJqYxHw04a7w+7D5XMy2qziJAPruh6t17oAvyP2S7Ygw/k/u47Df+Rp8AwSGAM9v3M/29Jm2YA/dI6p+84Zidt/sfpDrtffjdVdSqn0nTTKAoAJqpHB7PRZ6ySoPB2M1NT+tBkRIrl8Xtq90M/mrojqynvZfdFBecifYpe9lN5+R/046VzexVkS4iGnbvXprmz4UjGN95+6uTwnb2krnz3UUpddX0O+guTrANttkxjD2AYP8c8XuPl4mbhc7r6Cl4sR4/mcES3FujHnZSHJJR5EZQPvtouvN3gKdPz5trO68lI93b95VyMicrqv8AXwshfDewS5Ijh64tQHkFA++mLLMn1RTfVAlO06FPdYYIiZ7CRH6/Ut7bmTOd90d68CKgXw/Kk8gLTLT398oEA5XjdvjhUGWQIFXtG1sMnadH/fktjcWsYsXr44iNFdJ94+lWj+ctVp9gbT4pw0GUX9ZU+5ROwBVxznklP89nkxWZqrZbdnVry9RK4CbbA2V4lEeH4PihQy7vO408oNKzxfffy9mesE/e65iucviyRe0NcbCZZFqWkMujFx5mHvdjOHkMGdodn3utqhUiJTA7ymKMqSFgxKVF1QWrYcmDGvx6t8ehlXPL9s3GgT85bVtb2c+ZnERQG/jkGHtJigEuwMtCCYSs0MC4zO/SyXWdmvogYaWzfBS5k3Xq1Gzcue39znvp+5bs6xfF+ZtDtfciA6quzavrTRG9vFYUnf347DFKVp7L5W7W10tbQ3viwKZmbZ+8hx5mSxOTfqlVC1Im0BWgO9iRq+gPLakrf2XNS29fswRFCSTp1ty3TtDkWvrqyX+wjoOZ9yWUuMqS5s6QcFvFOrpVugHR/j8Xk26B6oTTQSShUIhIfhlZcF0nZ8deVwPJwRFM+c04FqM0bJCKTpbPPWO+eX6LM2z9E0Def3ITnJdPiQ2n0Eo9JGeMagTpE37rvNuef+gxYW5oDfcH5HYR19grbNZndy0FCkN6ALm/2nK5jn0G8ROL3Dvht8duRGArzkFcqbSSAQ6TPkDtU/kEjO+aFKKLOe7/efr8OwLkWDahsImK4GhVDkTs2Pd8jVbTNXQaAP5ji+VAZfjLtTKINU0Lg4CjQKAUTDKvnZYQeoI86At8tQdcVH4L7Zl1sz8u24Q4Jgb4FW1NbQ9dtPjnRIM50qKboY0AooCoifv17Y0haP8t1yGLerzxUlHIhvbx6ztxtC1pYaB+dYVfKHNxTQjpsRvM7S1ULRWHy9W3VpvLupU45PRFUHfzxmtw9xfj5QLcqRedDvJsRO9He94v1O7khA7p5jHebPJwi84baM2gctEAG7CoadFFEnoX9a0gzbydTnA/kEhY5rutPZWvM37WTOsch4qlGaCNtD1pAESmDb7efK8bBaHHIbjzZd5ANBG47Vptb8fXMgcyDq07cD3DeHOr1EZ7GZs6Gb6jZ3Hz6UQvYiVZcIfj+/1EQ8j3bS+NKuGLbm0221V4kRzPGwGQG1emQU8pZa0qwUc5LMTS/UqgQkJGeMKiLv4ODXi46R2x8GTG2S/d45V386MZSf9X1Ooukp+n3gTQSqxJoRymX2VBmyMTJ2P9hxaGsHzL692RL2I0hIo2MNruhIDqD4l1Vwn25dJd3AUrw4w8D949784JBkbZ3ZLv5mKaT2MRF03NkXPgPS9G6GQ48suJOxPIl+dIanfDs5SU7yUWd2ZYEnxnQV4684LMlkRsD6xL6Qmhs3o8FPTxC688nMSZnXB4eMoxxNvDaBGSq1vnPVUKm3HEUUieiMg+NkS/+6e/edVgSr9Qg1texAX6zQW5p2LJS4cYonNyIDlFmIPyCFBts/ytzudm4fNTO3xwVjHux2FRB93Huz26uec1sMwVHys/NQTw1PiVWNddawWWbIV8Ty13Tfnp9yp6OExoV9Du+m+DeHlNtpvJNcYm067Kk9WnDJcPFKGD6F8Oazo3c/ainfO3W4j2elHL7oda+ndI9VYJ9Gs/6X4o4ma2cgeXho1j3irPgIkX7ZOz3/r86YhlyMkaD5574Xu5jtSUP/2+PeIWaRifq14LkXxkcLQ8+VLRFTN6ovUehfNReXdQMlGtQA8zBHTgcoEKmC/+JRfdtiN8ctFJ0Yy/y/cJHfbv8HCUZmoJflx78AAAAASUVORK5CYII=","data:image/jpeg;base64,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","data:image/png;base64,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"]

    for (let i = 0; i < images.length; i++) {
      pdf.addImage(images[i], "JPEG", 20, offsetY, 50, 50);
      offsetY += 60;
    }
    pdf.save("user_details.pdf");
  };
  
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add more user details as needed */}
      <button onClick={downloadPDF} style={{width:"10%",backgroundColor:"white",height:"35px"}}>Download as PDF</button>
     
    </div>
  );
};

export default UserCardDetails;
