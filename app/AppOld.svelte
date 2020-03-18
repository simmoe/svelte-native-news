<page>
    <actionBar title="News App" />
    {#if show}
    <stackLayout class='modal'>
        <label text='hej med dig'>
        <button on:tap={ () => show = false } text='hide'/>
    </stackLayout>
    {:else}
    <stackLayout>
        <scrollView>
            <stackLayout class='articles'>
                {#each articles as article}
                    <!-- content here -->
                    <stackLayout class='article' on:tap={ () => show = true } >
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
    {/if}
</page>

<script>
import {screen} from "tns-core-modules/platform/platform"
import { fade, fly } from 'svelte/transition'

const fullWidth = screen.mainScreen.widthPixels

let articles = []
let show = false;

const getArticles = async () => {
    var url = 'https://newsapi.org/v2/top-headlines?' +
              'country=us&' +
              'apiKey=ed87ebff01bb4f5998eed5fb8a0aba89';
    var req = new Request(url);
    const res = await fetch(req)
    .catch((error) => {
        console.error('Error:', error);
    }) 
    const json = await res.json()
    console.log(json.articles[0].author)
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
    }
    .modal{
        width:100%;
        height:100%;
        padding:24;
        text-align:center;
    }
</style>
