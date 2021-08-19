class Loader {
    constructor(t) {
        this.imagen = t || "https://3.bp.blogspot.com/-i5fyaRFFWA4/WKh_DSnq1HI/AAAAAAAABGA/xMVZuOWs8T8MBB-BWXTu7-CE9WXMBbk_ACLcB/s400/loading%2Bgif%2B3.gif",
        this.makeLoader(),
        this.loadingExecute($(".loader"))
    }
    makeLoader() {
        let t = this.imagen;
        $("body").append($("<div>", {
            class: "loader"
        }).append($("<img>", {
            src: t,
            class: "imgLoadingTest"
        }))),
        $(".loader").css({
            "background-color": "#000000f5",
            height: "100%",
            width: "100%",
            position: "fixed",
            "z-index": "9999",
            "margin-top": "0",
            top: "0",
            "text-align": "center",
            display: "none"
        }),
        $(".imgLoadingTest").css({
            margin: "auto",
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
            position: "absolute"
        })
    }
    loadingExecute(t) {
        $(document).ajaxStart((function() {
            t.fadeIn()
        }
        )).ajaxStop((function() {
           // t.fadeOut()
        }
        ))
    }
}

let carga = new Loader("./assets/img/loading.gif");

$.ajax({
    type: "post",
    url: "/test",
    data: "no data",
    dataType: "json",
    success: function (response) {

    }
});