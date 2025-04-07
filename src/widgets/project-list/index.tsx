import { PlusIcon } from "lucide-react"

import { Project } from "@/entities/project"

import { ProjectListItem } from "./_ui/project-list-item"

type Props = {
	projects: Project[]
}
export function ProjectList({ projects }: Props) {
	return (
		<div className="mb-8 w-full overflow-y-auto rounded-lg bg-white text-gray-800 sm:mb-0 sm:h-3/4 sm:min-w-xl">
			<div className="flex h-15 items-center justify-between rounded-t-lg bg-gradient-to-r from-pink-400 to-orange-400 px-8">
				<h2 className="text-xl text-white">Проекты</h2>
				<button className="flex items-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 text-white hover:opacity-90">
					<PlusIcon />
					Новый проект
				</button>
			</div>
			<ul className="p-6">
				{projects.map((project) => (
					<ProjectListItem key={project.id} data={project} />
				))}
			</ul>
		</div>
	)
}
