function it(description, fn) {
    try {
        console.log(CIANO_MARK.p, `\n\nExecutando caso de teste: ${description}...`)
        fn();
        console.log(CHECK_MARK.p, CHECK_MARK.uc + `${description}...`)
    } catch (err) {
        console.log(ERROR_MARK.p, ERROR_MARK.uc + `Erros encontrados no teste ${description}...`)
        console.error(err)
    }
}

function toBe(isTrue) {
    if (!isTrue)
        throw new Error()
}

module.exports = { it, toBe }