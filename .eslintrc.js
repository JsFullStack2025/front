module.exports = {
	plugins: ["import"],
	rules: {
		"import/order": [
			"error",
			{
				groups: [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index"
				],
				pathGroups: [
					{
						pattern: "@/entities/**",
						group: "internal",
						position: "before"
					},
					{
						pattern: "@/widgets/**",
						group: "internal",
						position: "before"
					},
					{
						pattern: "@/features/**",
						group: "internal",
						position: "before"
					},
					{
						pattern: "@/shared/ui/**",
						group: "internal",
						position: "before"
					},
					{
						pattern: "@/shared/lib/**",
						group: "internal",
						position: "before"
					},
					{
						pattern: "@/shared/api/**",
						group: "internal",
						position: "before"
					},
					{
						pattern: "@/shared/config/**",
						group: "internal",
						position: "before"
					}
				],
				pathGroupsExcludedImportTypes: ["builtin"],
				"newlines-between": "always"
			}
		]
	}
}
