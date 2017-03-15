<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <hr>
        <app-quote-grid :quotes="quotes" @deleteQuote="deleteQuote"></app-quote-grid>
        <div class="row" v-show="quotes.length">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click on quote to delete it
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import NewQuote from './components/NewQuote.vue'
import QuoteGrid from './components/QuoteGrid.vue'

export default {
    data: function() {
        return {
            quotes: [
                'aum',
                'Hello Universe',
                'Age is an issue of mind over matter. If you don’t mind, it doesn’t matter. -A.H'],
            maxQuotes: 10
        }
    },
    components: {
        appHeader: Header,
        appNewQuote: NewQuote,
        appQuoteGrid: QuoteGrid
    },
    methods: {
        newQuote: function(quote) {
            this.quotes.unshift(quote)
        },
        deleteQuote: function(index) {
            this.quotes.splice(index, 1)
        }
    }
}
</script>

<style>
</style>
