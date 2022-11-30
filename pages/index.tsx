import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function Home({ pageContent: { data } }: any) {
  console.log(data);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          id="elementor-global-css"
          href="https://api.amir-jf.ir/wp-content/uploads/elementor/css/global.css?ver=1669396724"
          type="text/css"
          media="all"
        />
      </Head>
      <Script src="https://api.amir-jf.ir/wp-includes/js/jquery/jquery.min.js?ver=3.6.1" />
      <Script src="https://api.amir-jf.ir/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.7.2" />
      <Script src="https://api.amir-jf.ir/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.7.2" />
      <Script src="https://api.amir-jf.ir/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.7.2" />
      <Script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Extra","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Extra","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}},"version":"3.7.2","is_static":false,"experimentalFeatures":{"e_dom_optimization":true,"e_optimized_assets_loading":true,"e_optimized_css_loading":true,"a11y_improvements":true,"additional_custom_breakpoints":true,"e_import_export":true,"e_hidden_wordpress_widgets":true,"hello-theme-header-footer":true,"landing-pages":true,"elements-color-picker":true,"favorite-widgets":true,"admin-top-bar":true},"urls":{"assets":"https:\/\/api.amir-jf.ir\/wp-content\/plugins\/elementor\/assets\/"},"settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description","hello_header_logo_type":"title","hello_header_menu_layout":"horizontal","hello_footer_logo_type":"logo"},"post":{"id":15,"title":"test%20next%20%E2%80%93%20Just%20another%20WordPress%20site","excerpt":"","featuredImage":false},"user":{"roles":["administrator"]}};
`,
        }}
      />
      <div style={{ display: 'inline-flex', columnGap: 20, padding: 10 }}>
        <Link href="/srp">
          <a>SRP</a>
        </Link>
        <Link href="/nissan/altima">
          <a>nissan</a>
        </Link>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.pageBy.content }}></div>
    </>
  );
}

export const getServerSideProps = async ({ res }: any) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=30, stale-while-revalidate=159'
  );

  let url = 'https://api.amir-jf.ir/graphql';
  const result = await axios.post(url, {
    query: `
    query NewQuery {
      pageBy(uri: "/") {
        id
        content
      }
    }
    `,
  });

  console.log(result);

  return {
    props: {
      pageContent: result.data,
    },
  };
};
