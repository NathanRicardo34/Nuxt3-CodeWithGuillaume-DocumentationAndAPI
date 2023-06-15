import { countries } from '@doubco/countries'

export default eventHandler(async (event) => {
    const body = await readBody(event)
    const { capital } = body
    const countriesArr = Object.values(countries)
    return {
        countries: countriesArr.filter(obj => obj.capital === capital)
    }
})
