var ctn = {
    ctnLasagne: {
    },
    ctnPasta: {
    },
    ctnGalette: {
    }
};

window.addEventListener("load", function(event) {
    ctn.ctnLasagne = this.document.getElementsByClassName('ctn-lasagne')

    ctn.ctnPasta = this.document.getElementsByClassName('ctn-recip')

    ctn.ctnGalette = this.document.getElementsByClassName('ctn-galette')

    console.log("Loaded resources", ctn);
});