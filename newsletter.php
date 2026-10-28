<?php
$bedankt = null;

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["inschrijven"])) {
    $naam = htmlspecialchars(trim($_POST["naam"] ?? ""), ENT_QUOTES, "UTF-8");

    $bedankt = "Bedankt " . $naam . ", je bent ingeschreven voor onze nieuwsbrief!";
}
?>

<div
    id="newsletter-modal"
    class="modal"
    data-inschrijving-gelukt="<?php echo isset($bedankt) ? 'ja' : 'nee'; ?>"
>

    <div class="modal-content">

        <button type="button" id="newsletter-close" class="modal-close">
            &times;
        </button>

        <h2>Nieuwsbrief</h2>

        <?php if (isset($bedankt)) { ?>

            <p class="bedankt-bericht">
                <?php echo $bedankt; ?>
            </p>

        <?php } else { ?>

            <p>Schrijf je in voor onze nieuwsbrief!</p>

            <form method="POST" action="">

                <label for="naam">Naam:</label>
                <input type="text" id="naam" name="naam" required>

                <label for="email">E-mailadres:</label>
                <input type="email" id="email" name="email" required>

                <button type="submit" name="inschrijven">
                    Inschrijven
                </button>

            </form>

        <?php } ?>

    </div>

</div>