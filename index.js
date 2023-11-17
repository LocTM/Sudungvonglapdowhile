let value = null;
    do{
        value = prompt("Nhap vao so tu 1 den 10");
}
    while (value < 1 || value > 10);
    alert("So ban vua nhap vao la " + value);