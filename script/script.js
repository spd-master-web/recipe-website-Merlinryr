var ctn = {
    ctnLasagne: {
    },
    ctnPasta: {
    },
    ctnGalette: {
    }
};

var tableLabel;


window.addEventListener("load", function(event) {
    ctn.ctnLasagne = this.document.getElementsByClassName('ctn-lasagne')

    ctn.ctnPasta = this.document.getElementsByClassName('ctn-recip')

    ctn.ctnGalette = this.document.getElementsByClassName('ctn-galette')

    console.log("Toutes les ressources sont chargées !", ctn);
});