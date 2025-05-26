export class JobExperience {
  constructor(
    public id: string,
    public companyName: string,
    public jobTitle: string,
    public startDate: Date,
    public endDate: Date | null,
    public description: string
  ) {}

  getDuration(): string {
    const start = this.startDate;
    const end = this.endDate || new Date();
    const duration = Math.abs(end.getTime() - start.getTime());
    const days = Math.ceil(duration / (1000 * 3600 * 24));
    return `${days} days`;
  }
}
