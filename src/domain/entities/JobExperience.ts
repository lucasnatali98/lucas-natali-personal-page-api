export class JobExperience {
  constructor(
    public id: string,
    public company: string,
    public position: string,
    public location: string,
    public startDate: Date,
    public endDate: Date | null,
    public description: string,
    public tags: string[],
    public userId?: string | null
  ) {}

  get current(): boolean {
    return this.endDate === null;
  }

  getPeriod(): string {
    const start = this.startDate.getFullYear();
    const end = this.endDate ? this.endDate.getFullYear().toString() : "Presente";
    return `${start} — ${end}`;
  }
}
