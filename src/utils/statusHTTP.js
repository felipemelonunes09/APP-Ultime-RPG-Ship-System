
const base = (status, message, code) => { return { status, message, code } }

const HTTP = {
    ok: (message) => { return base(true, message, 200)},
    created: (message) => { return base( true, message, 201 ) },
    badRequest: (message) => { return base(false, message, 400) },
    internalServer: (message = 'Server error, please try again later ;)') => { return base(false, message, 500)}
}

module.exports = HTTP;