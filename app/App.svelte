<page>
    <actionBar title="News App" />
    <stackLayout>
        <scrollView>
            <stackLayout class='articles'>
                {#each articles as article}
                    <!-- content here -->
                    <stackLayout class='article' on:tap={ () => showArticle(article) } >
                        <image class="img-rounded m-b-20" src='{article.urlToImage}' alt='article image' stretch="aspectFill"/>
                        <label class='h2 white' text='{article.title}' />
                        <label class='-primary' text='{article.author}' />
                    </stackLayout>
                {:else}
                    <activityIndicator busy={true} />
                {/each} 
            </stackLayout> 
        </scrollView>
    </stackLayout>
</page>

<script>
import { showModal } from 'svelte-native'
import Article from './modals/Article.svelte'

let articles = []
const showArticle = async (article) => {
    await showModal(
        { 
        page: Article, 
        props: { 
            article:article
        }
    })
}

const getArticles = async () => {
    var url = 'https://newsapi.org/v2/top-headlines?' +
              'country=no&' +
              'apiKey=ed87ebff01bb4f5998eed5fb8a0aba89';
    var req = new Request(url);
    const res = await fetch(req)
    .catch((error) => {
        console.error('Error:', error);
    }) 
    const json = await res.json()
    articles = json.articles
}

getArticles()

</script>

<style>
    .articles{
        width:100%;
    }
    .white{
        color:#999;
    }
    .article{
        min-height:100;
        padding:24;
        margin:24;
        background-color:#111;
        color:white;
        animation: leftIn .4s ease;
    }
    @keyframes leftIn{
        from{
            transform:translate(-100,0);
        }
        to{
            transform:translate(0,0);
        }
    }
</style>

