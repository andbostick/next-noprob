import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "9lnqiah3",
    dataset: 'production',
    apiVersion: '2021-08-31',
    useCdn: false
})