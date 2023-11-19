export class Course {
	author: string = "";
	category: string = "";
	description: string = "";
	id: string = "";
	image: string = "";
	language: string = "";
	last_update: number = 0;
	learning_goals: unknown[] = [];
	price: number = 0;
	requirements: unknown[] = [];
	sections: Section[] = [];
	title: string = "";
}

export class Section {
	description: string = "";
	id?: string = ""; // ? Only in Detailed Course-response
	completed?: boolean = false; // ? Only in Course-summary
	title: string = "";
	lectures: Lecture[] = [];
}

export class Lecture {
	completed: boolean = false;
	description: string = "";
	duration: number = 0;
	id: string = "";
	title: string = "";
	type: string = "";
	video_id: string = "";
}

export interface GetUnseenLectureResponse {
	lecture: Omit<Lecture, "completed">;
	section: Omit<Section, "completed">;
}

export class GetAllMatchingsQuery {
	attempted: boolean | undefined = undefined;
	solved: boolean | undefined = undefined;
	rated: boolean | undefined = undefined;
	enabled: boolean | undefined = undefined;
	retired: boolean | undefined = undefined;
	creator: string | undefined = undefined;
}

export class CreateNewMatchingBody {
	xp: number | null = null;
	coins: number | null = null;
	left: string[] = [];
	right: string[] = [];
	solution: string[] = [];
}

export class UpdateMatchingBody extends CreateNewMatchingBody{
	task_id: string = "";
	enabled: boolean = true;
	retired: boolean = false;
}

export class Matching {
	id: string = "";
	task_id: string = "";
	type: string = ""; // Question: What enum types are there?
	creator: string = ""; // Information: "CODING_CHALLENGE"
	creation_timestamp: string = "";
	solved: boolean = false;
	rated: boolean = false;
	enabled: boolean = false;
	retired: boolean = false;
	xp: number = 0;
	coins: number = 0;
	left: string[] = [];
	right: string[] = [];
}

export class MatchingWithSolution extends Matching {
	solution: string[] = [];
}

export type MatchingSolve = {
	answer: string[]
}

export type MatchingAnswer = {
	solved: boolean
	correct: number
}
