
<?php
$name = $_POST['nombre'];
$telephone = $_POST['telefono'];
$mailFrom = $_POST['email'];
$message = $_POST['mensaje'];

$header = 'From: ' . $mailFrom . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";


$comentario .= "Este mensaje fue enviado por: " . $name . " \r\n";
$comentario .= "Su e-mail es: " . $mailFrom . " \r\n";
$comentario .= "Su telefono es: " . $telephone . " \r\n";
$comentario .= "Su mensaje es: ". $message ." \r\n";

$para = 'contacto@industrialmueblera.com.mx';
$asunto = 'Contacto desde pagina web';

mail($para, $asunto, utf8_decode($comentario), $header);

// video validar
$nombre = $_POST['nombre'];

echo json_encode(array(
    'Mensaje' => sprintf('Se ha recibido tu mensaje %s', $nombre),
    header("Location: http://industrialmueblera.com.mx/#/"),
    die(),
));
//* contacto@industrialmueblera.com.mx *//