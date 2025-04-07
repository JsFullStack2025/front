"use client"

import { MailIcon, SaveIcon } from "lucide-react"
import Image from "next/image"

import { Project } from "@/entities/project"

import { ProjectList } from "@/widgets/project-list"

import { Button } from "@/shared/ui/button"

import testFetch from "@/shared/api/test-fetch"

const projects: Project[] = [
	{
		id: "1",
		name: "Project 1",
		description: "Description 1"
	},
	{
		id: "2",
		name: "Project 2",
		description: "Description 2"
	},
	{
		id: "3",
		name: "Project 3",
		description: "Description 3"
	}
]

export default function UserProfile() {
	const onClick = async () => {
		const data = await testFetch()
		console.log(data)
	}

	return (
		<div className="h-screen overflow-y-auto font-sans">
			<form>
				<fieldset>
					<div className="flex h-screen flex-wrap items-center justify-between gap-8 p-8 sm:flex-nowrap">
						<div className="flex w-full flex-col overflow-y-auto rounded-lg bg-white p-6 text-gray-800 sm:h-3/4 sm:w-1/3 sm:min-w-sm">
							<div className="mb-6">
								<h2 className="text-center text-xl">Редактировать профиль</h2>
							</div>
							<Button
								onClick={onClick}
								type="button"
								variant="outline"
								size="sm"
							>
								Send
							</Button>
							<div className="mb-6 flex items-center justify-center gap-4">
								<Image
									className="h-32 w-32 rounded-full border-2 border-indigo-300"
									src="/foto.jpg"
									alt="Profile Picture"
									width={124}
									height={124}
									priority
								/>
								<div className="w-full">
									<label htmlFor="name" className="block text-sm">
										Имя пользователя:
									</label>

									<div className="text-gray-500">@Erin_Lindford</div>
								</div>
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="block text-sm">
									Электронная почта
								</label>
								<div className="relative">
									<input
										type="email"
										id="email"
										name="email"
										required
										className="mt-2 w-full rounded-lg border border-gray-300 p-2 pl-9 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:outline-none"
										placeholder="Введите электронную почту"
									/>
									<span className="absolute top-1/2 left-2.5 -translate-y-1/4 text-gray-400">
										<MailIcon />
									</span>
								</div>
							</div>
							<div className="flex h-full flex-row items-end justify-end">
								<button className="flex items-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 text-white hover:opacity-90">
									<SaveIcon />
									<span>Сохранить</span>
								</button>
							</div>
						</div>

						<ProjectList projects={projects} />
					</div>
				</fieldset>
			</form>
		</div>
	)
}
