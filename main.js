$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault()
        
        var status = true
        var email = $('.email').val()
        var name = $('.name').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var number = $('.number').val()
        var statusElm = $('.status')
        statusElm.empty()

        if (email.length > 5 && email.includes('@') && email.includes('.'))
        {
            status = true
        }
        else {
            statusElm.append('<div>Email is not valid</div>')
            status = false
        }

        if (subject.length > 2)
        {
            status = true
        }
        else {
            statusElm.append('<div>Subject is not valid</div>')
            status = false
        }

        if (number.length >= 7)
        {
            status = true
        }
        else {
            statusElm.append('<div>Number is not valid</div>')
            status = false
        }

        if (message.length > 20)
        {
            status = true
        }
        else {
            statusElm.append('<div>Message is not valid</div>')
            status = false
        }

        if (status == true)
        {
        alert("Form Submitted") 
        window.location.href = "index.html";
        }
    })
})