import { countries } from '@doubco/countries'

export default eventHandler(async (event) => {
    const body = await readBody(event)
    const { currency } = body
    const countriesArr = Object.values(countries)
    return {
        countries: countriesArr.filter(obj => obj.currency === currency)
    }
})
