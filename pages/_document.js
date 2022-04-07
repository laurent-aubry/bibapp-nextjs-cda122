import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700&display=swap" rel="stylesheet" /> */}
                    <link
                        href="/fonts/PublicSans-Bold.ttf"
                        as="font"
                        rel="preload"
                        crossOrigin='anonymous'
                    />
                    <link
                        href="/fonts/PublicSans-regular.ttf"
                        as="font"
                        rel="preload"
                        crossOrigin='anonymous'
                    />
                    <link
                        href="/fonts/PublicSans-semiBold.ttf"
                        as="font"
                        rel="preload"
                        crossOrigin='anonymous'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument