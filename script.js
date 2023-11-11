function submit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("message").value;
    var output;

    if (email == "" || email == "" || msg == "") {
        output = `
        <div class="output"> 
            <h3>Not All Fields are filled. Please fill up all the fields.</h3>
        </div>
        `;
    }
    else {
        output = `
        <div class="output">
                        <h3>Record Submitted!</h3>
                        <p>Thank You, ${name}</p>
                        <p>Email: ${email}</p>
                        <p>Message: ${msg}</p>
                    </div>
        `;
    }

    document.getElementById("generate").innerHTML = output;



}