import { EditIcon, TrashIcon } from "lucide-react"

import { Project } from "@/entities/project"

type Props = {
	data: Project
}
export function ProjectListItem({ data }: Props) {
	return (
		<li className="flex items-center justify-between border-b border-gray-300 px-1.5 py-2.5 hover:bg-purple-50">
			<button className="cursor-pointer">
				<TrashIcon />
			</button>
			<span className="mx-5 grow">{data.name}</span>
			<button className="cursor-pointer text-blue-500">
				<EditIcon />
			</button>
		</li>
	)
}
