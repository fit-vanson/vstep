<script>
    jQuery(document).ready(function () {

        $("<?php echo $validator['selector']; ?>").validate({
            errorElement: 'span',
            errorClass: 'invalid-feedback',

            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length ||
                    element.prop('type') === 'checkbox' || element.prop('type') === 'radio') {
                    error.insertAfter(element.parent());
                    // else just place the validation message immediately after the input
                } else {
                    error.insertAfter(element);
                }
            },

            highlight: function (element) {
                $(element).closest('.form-group input').removeClass('is-valid').addClass('is-invalid');
            },

            <?php if (isset($validator['ignore']) && is_string($validator['ignore'])) : ?>
            ignore: "<?php echo $validator['ignore']; ?>",
            <?php endif; ?>


            // Uncomment this to mark as validated non required fields
            unhighlight: function (element) {
                $(element).closest('.form-group input').removeClass('is-invalid');
            },

            success: function (element) {
                $(element).closest('.form-group input').removeClass('is-invalid').addClass('is-valid');
            },

            focusInvalid: false, // do not focus the last invalid input
            <?php if (Config::get('jsvalidation.focus_on_error')) : ?>
            invalidHandler: function (form, validator) {

                if (!validator.numberOfInvalids())
                    return;

                $('html, body').animate({
                    scrollTop: $(validator.errorList[0].element).offset().top
                }, <?php echo Config::get('jsvalidation.duration_animate') ?>);
                $(validator.errorList[0].element).focus();

            },
            <?php endif; ?>

            rules: <?php echo json_encode($validator['rules']); ?>
        })
    })
</script>
