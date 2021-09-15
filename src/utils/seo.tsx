import Head from "next/head";

interface SEOProps{
    ogImage?:string;
    title?:string;
    description?:string;
}

export function SEO({ogImage,title,description}:SEOProps) {

    const defaultDescription =""
    const defaultTitle = "Moradia Criativa"
    return (
        <Head>
            <title> {title? `${title} | Moradia Criativa` : defaultTitle} </title>
            <meta name="description" content={description? description : defaultDescription}></meta>
            <link rel="canonical" href="https://moradiacriativa.com.br/" />
            <meta content="AgenciaLMG" name="author" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:site_name" content="Moradia Criativa" />
            <meta property="og:title" content={title? title : defaultTitle} />
            <meta property="og:description" content={description? description : defaultDescription}></meta>

            <meta property="og:image" content={ogImage? ogImage : "/ogImage.jpg"} />
            <meta property="og:url" content="https://MoradiaCriativa.com.br/" />
        </Head>
    )
}