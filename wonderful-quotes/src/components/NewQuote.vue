<template lang="html">
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
                <div class="form-group">
                    <label>Quote</label>
                    <textarea class="form-control" rows="3" v-model="quote"></textarea>
                </div>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
                <button class="btn btn-primary" :class="{ disabled: !quote.trim().length}" @click.prevent="createNew">Add Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            quote: ''
        }
    },
    methods: {
        createNew: function() {
            this.$emit('quoteAdded', this.quote)
            this.quote = ''
        }
    }
}
</script>

<style lang="css">
</style>
