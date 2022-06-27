<template>
	<client-only>
		<section class="container">
			<div 	class="quill-editor"
						:content="content"
						@change="onEditorChange($event)"
						v-quill:myQuillEditor="editorOption">
			</div>
		</section>
	</client-only>
</template>

<script>
// TODO: Сделать автоссылки, разобраться с подключением библиотек с SSR
// import Quill from "quill";
// import QuillAutoDetectUrl from "quill-auto-detect-url";
//
// Quill.register("modules/autoDetectUrl", QuillAutoDetectUrl);

export default {
	data () {
		return {
				content: ``,
				editorOption: {
					fontsize: 14,
					modules: {
						toolbar: [
								['bold', 'italic', 'underline', 'strike','link'],        // toggled buttons
								['blockquote', 'code-block'],
								[{ 'header': 1 }, { 'header': 2 }],               // custom button values
								[{ 'list': 'ordered'}, { 'list': 'bullet' }],
								[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
								[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
								[{ 'direction': 'rtl' }],                         // text direction
								[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
								[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
								[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
								[{ 'font': [] }],
								[{ 'align': [] }],
								// ['clean']                                         // remove formatting button
							]
					},
					placeholder: 'Комментарий...',
					theme: 'snow',
					autoDetectUrl: { urlRegularExpression: /(https?:\/\/|www\.)[\w-.]+\.[\w-.]+[\S]+/i,} // or true
				},
		}
	},
	mounted() {
	//console.log('app init, my quill insrance object is:', this.myQuillEditor)
	// @change="onEditorChange($event)"
	// @blur="onEditorBlur($event)"
	// @focus="onEditorFocus($event)"
	// @ready="onEditorReady($event)"
	},
	methods: {
		// onEditorBlur(editor) {
		// 	console.log('editor blur!', editor)
		// },
		// onEditorFocus(editor) {
		// 	console.log('editor focus!', editor)
		// },
		// onEditorReady(editor) {
		// 	console.log('editor ready!', editor)
		// },
		onEditorChange({ editor, html, text }) {
			// console.log('editor change!', editor, html, text)
			this.content = html
		}
	}
}
</script>

<style lang="scss" scoped>
//.container {
//	width: 60%;
//	margin: 0 auto;
//	padding: 50px 0;
//	.quill-editor {
//		min-height: 200px;
//		max-height: 400px;
//		overflow-y: auto;
//	}
//}
</style>
