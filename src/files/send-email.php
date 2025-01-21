<?php
// Обработчик отправки формы

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $phone = htmlspecialchars($_POST['phone']);
    $referringPhysician = htmlspecialchars($_POST['referringPhysician']);

    // Проверка email
    if (!$email) {
        echo json_encode(['success' => false, 'message' => 'Incorrect email']);
        exit;
    }
    // Проверка телефона
    if (!preg_match('/^[0-9]{10,15}$/', $phone)) {
        echo json_encode(['success' => false, 'message' => 'Please enter a valid phone number (10-15 digits)']);
        exit;
    }

    $to = '4363626@gmail.com'; // Целевой email
    $subject = "[Mproc.com] Message from $name";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nReferring physician: $referringPhysician";

    $headers = [
        "From: $email",
        "Reply-To: $email",
        "Content-Type: text/plain; charset=utf-8",
    ];

    if (mail($to, $subject, $body, implode("\r\n", $headers))) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error sending message']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
