import { Block, BlockType } from "../types/block.types"

export class BlockService {
	private blockTypes: Map<string, BlockType> = new Map()

	constructor() {
		this.registerBlockType({
			id: "text",
			fields: [
				{
					type: "text",
					name: "content",
					label: "Содержимое",
					required: true
				}
			],
			validate: (data: any) => {
				return typeof data.content === "string" && data.content.length > 0
			}
		})
	}

	registerBlockType(blockType: BlockType): void {
		this.blockTypes.set(blockType.id, blockType)
	}

	createBlock(type: string, data: any): Block {
		const blockType = this.blockTypes.get(type)
		if (!blockType) {
			throw new Error(`Block type ${type} not found`)
		}

		if (blockType.validate && !blockType.validate(data)) {
			throw new Error(`Invalid data for block type ${type}`)
		}

		const block: Block = {
			id: crypto.randomUUID(),
			type,
			createdAt: new Date(),
			updatedAt: new Date(),
			...data
		}

		return block
	}
}
