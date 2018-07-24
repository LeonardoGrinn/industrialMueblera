
<?php
if (isset($_POST['submit'])) {
  $name = $_POST['nombre'];
  $mailFrom = $_POST['email'];
  $telephone = $_POST['telefono'];
  $message = $_POST['mensaje'];


  $mailTo = "contacto@industrialmueblera.com"; //* contacto@industrialmueblera.com */
  $headers = "From: ".$mailFrom;
  $txt = "Has recibido un nuevo correo de: ".$name.".\n\n".$telephone.".\n\n".$message;

  mail($mailTo, "Informacion para proyecto", $txt, $headers);

  header("Location: index.php?mailsend");

}
