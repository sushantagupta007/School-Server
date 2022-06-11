module.exports = (resultData) => {
  const {
    student,
    id,
    bangla,
    english,
    math,
    science,
    socialscience,
    gk,
    it,
    ct,
  } = resultData;

  return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
            <title>Document</title>
            <style>
                body {
                    border: 1px solid black;
                    width: 75%;
                    margin: 0px auto;
                }
        
                .header {
                    width: 100%;
        
                    display: flex;
                    flex-direction: column;
                    align-items: center;
        
                }
        
                .header img {
                    width: 100px;
                    height: 100px;
                }
        
                h1 {
                    font-size: 3rem;
                    font-family: Georgia, 'Times New Roman', Times, serif;
                    text-transform: uppercase;
                    margin: 0px;
        
                }
        
                h2 {
                    font-size: 2rem;
                    text-decoration: underline dotted;
                    font-weight: normal;
                }
        
                #studentInfo {
                    display: flex;
                    justify-content: space-between;
                    width: 75%;
                }
        
        
                table {
                    font-family: Georgia, 'Times New Roman', Times, serif;
                    border-collapse: collapse;
                    width: 100%;
                    font-size: 1.3rem;
        
                }
        
                main {
                    padding-left: 1rem;
                    padding-right: 1rem;
                    box-sizing: border-box;
                }
        
                td,
                th {
                    border: 1px solid #dddddd;
                    text-align: left;
                    padding: 8px;
                }
        
                tr:nth-child(even) {
                    background-color: #dddddd;
                }
        
                footer>div>p {
                    text-align: center;
                    color: red
                }
        
                footer>div {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    padding: 10px;
                }
        
                .imgContainer {
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;
                    border: 1px solid black;
                    width: 10%
                }
        
                .imgContainer img {
                    width: 100px;
                    height: 50px;
                }
            </style>
        </head>
        
        <body>
            <header class="header">
                <img src="https://cdn-prod.voxy.com/wp-content/uploads/2012/10/school-1.jpg" alt="" />
                <h1>Transcript</h1>
                <section id="studentInfo">
                    <h2> Name:${student} </h2>
                    <h2> Roll:${id} </h2>
                </section>
            </header>
            <main class="header">
            <table id="resultInfo">
            <tr>
                <th>Subject</th>
                <th>Marks</th>
                <th>Grade</th>
            </tr>
            <tr>
                <td>Bangla</td>
                <td>${bangla}</td>
                <td>A+</td>
            </tr>
            <tr>
                <td>English</td>
                <td>${english}</td>
                <td>A+</td>
            </tr>
            <tr>
                <td>Math</td>
                <td>${math}</td>
                <td>A+</td>
            </tr>
            <tr>
                <td>Math</td>
                <td>${science}</td>
                <td>A+</td>
            </tr>
            <tr>
                <td>Math</td>
                <td>${socialscience}</td>
                <td>A+</td>
            </tr>
            <tr>
                <td>Math</td>
                <td>${gk}</td>
                <td>A+</td>
            </tr>
            <tr>
                <td>Math</td>
                <td>${it}</td>
                <td>A+</td>
            </tr>
        </table>
            </main>
            <footer>
                <div>
                    <p> **@copyright: myschool.com. Any Change is strictly prohibited**</p>
                    <div class="imgContainer">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRJRZduIrzENX0q62WpjaMRruWi94KmnteWQ&usqp=CAU"
                            alt="sign" />
                        <div>
                            <p style="border-top:1px solid black">${ct}</p>
                            <p>Class Teacher, 8 </p>
                        </div>
        
                    </div>
                </div>
            </footer>
        </body>
        
        </html>`;
};
