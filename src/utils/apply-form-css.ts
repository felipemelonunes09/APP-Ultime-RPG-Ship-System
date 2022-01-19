
class FormCss {
    static validationCss(is: Boolean) {
        return {
            'errored': is,
            'error': is,
            'successed': !is,
            'success': !is
        }
    }
}