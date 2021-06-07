const formatPrice = (priceStrapi, quant = 1) => {
    const price = parseInt(priceStrapi * quant) / 100
    return price.toLocaleString("sv-SE", {
        style: "currency",
        currency: "SEK"
    })
}

export default formatPrice