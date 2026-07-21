*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#0c0c0c;
    color:white;
}

header{
    width:100%;
    padding:25px 60px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.logo{
    font-size:34px;
    color:#d9b46c;
    font-weight:bold;
    letter-spacing:4px;
}

.logo span{
    font-size:18px;
    display:block;
    letter-spacing:8px;
}

nav a{
    color:white;
    text-decoration:none;
    margin-left:35px;
    transition:.3s;
}

nav a:hover{
    color:#d9b46c;
}

.hero{
    height:85vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
}

.hero-logo{
    width:220px;
    margin-bottom:30px;
}

.hero h1{
    font-size:70px;
    color:#d9b46c;
    letter-spacing:6px;
}

.hero p{
    margin-top:20px;
    font-size:22px;
    color:#d8d8d8;
}

.btn{
    margin-top:45px;
    padding:18px 45px;
    background:#d9b46c;
    color:#111;
    text-decoration:none;
    border-radius:40px;
    font-weight:bold;
    transition:.3s;
}

.btn:hover{
    transform:translateY(-3px);
    box-shadow:0 0 25px rgba(217,180,108,.5);
}
