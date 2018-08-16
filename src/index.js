Component({
	properties: {
		id: {
			type: String,
			value: '',
		},
		value: {
			type: String,
			value: '',
			observer: function (newVal, oldVal) {
			}
		},
		placeholder: {
			type: String,
			value: '',
			observer: function (newVal, oldVal) {
			}
		}
	},
	options: {
		multipleSlots: true
	},
	data: {},
	methods: {
		hide: function () {
			this.triggerEvent('hide')
		},
		submit: function () {
			this.triggerEvent('submit', {value: this.data.value})
		}
	}
})