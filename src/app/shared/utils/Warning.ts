import Swal from "sweetalert2";


const BACKGROUND = '#0d1117'

const ERROR_LIST = {
    NO_CONNECTION: 0,
    BAD_REQUEST: 400, 
    FATAl_ERROR: 500
}

const ALERT_LIST = { 
    no_connection: {
        title: 'Hello server ? where are you ?',
        html: 'sorry but a connection with the server could not be completed',
        icon: 'question',
        timer: 4*1000,
        background: BACKGROUND
    },
    bad_request: {
        title: 'Bad Request',
        html: `Cause: `,
        icon: 'error',
        background: BACKGROUND
    }, 
    fatal_error: {
        title: 'Fatal error',
        html: 'We could not find the error origin, please try again later',
        icon: 'error',
        timer: 4*1000,
        background: BACKGROUND
    }
}

export class MyAlert {

    public static createdToast(text: string) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            /*background: BACKGROUND,*/
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: text
          })
    }

    public static show(errorNumber: number, info: any) {

        let alertResponse : any = ALERT_LIST.fatal_error
        switch(errorNumber) {
            case ERROR_LIST.NO_CONNECTION   : alertResponse = ALERT_LIST.no_connection; break;
            case ERROR_LIST.BAD_REQUEST     : 
                let alt = ALERT_LIST.bad_request

                alt.html = `Cause: ${ info }`
                alertResponse = alt; 
            break;
            case ERROR_LIST.FATAl_ERROR     : alertResponse = ALERT_LIST.fatal_error; break;
        }

        Swal.fire(alertResponse)
    }
}

