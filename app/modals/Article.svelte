<script>
    const utilsModule = require("tns-core-modules/utils/utils")
    import { closeModal } from 'svelte-native'
    export let article
    const published = new Date(article.publishedAt)
</script>

<frame>
	<page>
        <scrollView>        
        <stackLayout style='padding:24'>
                <textField class='h1' textWrap="{true}" text={article.title} />
                <textField class='primary' text={article.author} />
                <textField text={published.getDay() + '.' + published.getMonth() + ' ' + published.getFullYear() } />
                <textView  text={article.description} />
                <image 
                    class="img-rounded" 
                    src='{article.urlToImage}' 
                    alt='article image' 
                    stretch="aspectFill"
                    />
                <button 
                    on:tap={ () => utilsModule.openUrl(article.url)}
                    text='view in browser'/>
                <button on:tap={ () => closeModal() } text='close'/>
        </stackLayout>
        </scrollView>
	</page>
</frame>