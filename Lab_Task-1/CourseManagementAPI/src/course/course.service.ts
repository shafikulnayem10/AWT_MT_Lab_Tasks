import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  getAllCourses(): string {
    const message = 'Get All Courses';
    console.log(message);
    return message;
  }

  getCourseById(id: string): string {
    const message = `Get Course with ID: ${id} `;
    console.log(message);
    return message;
  }

  createCourse(): string {
    const message = 'Create Course ';
    console.log(message);
    return message;
  }

  updateCourse(id: string): string {
    const message = `Update Course ${id} `;
    console.log(message);
    return message;
  }

  patchCourse(id: string): string {
    const message = `Patch Course ${id} `;
    console.log(message);
    return message;
  }

  deleteCourse(id: string): string {
    const message = `Delete Course ${id} `;
    console.log(message);
    return message;
  }
}
