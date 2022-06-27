<template>
    <div id="PageNameH1">

        <h3 class="title">
				<div style="text-align: center;">
					<i><strong><slot></slot></strong></i>
				</div>
				</h3>

        <div class="container-fluid">
            <hr class="dropdown-divider">
        </div>
    </div>
</template>

<script>

export default {
    name: "PageNameH1",
}
</script>

<style scoped>

.title {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

</style>
