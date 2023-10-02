const init = { i: "szs", r: String(Math.random() * 10000000000).substring(0, 7) };
const form = document.getElementById("desktopForm");
form.querySelector("form input#fullname").value = "test case";
form.querySelector("form input#email").value = `test.case.${init.i}.${init.r}@tiebreak.solutions`;
form.querySelector("form input#phone-number").value = `088${init.r}`;
form.querySelector("form button[type='submit'].reg-btn").click();
