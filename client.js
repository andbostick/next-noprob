import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "9lnqiah3",
    dataset: 'production',
    useCdn: false
})