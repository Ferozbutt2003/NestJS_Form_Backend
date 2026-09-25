import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Application {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    cnic: string;

    @Column({ type: 'date' })
    dob: string;

    @Column()
    gender: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    qualification: string;

    @Column()
    institution: string;

    @Column()
    percentage: string;

    @Column()
    program: string;

    @Column()
    intake: string;

    @Column()
    address: string;

    @Column()
    city: string;

    @Column()
    country: string;

    @Column({ nullable: true })
    profilePhotoPath: string;

    @Column({ nullable: true })
    cnicFilePath: string;

    @Column({ nullable: true })
    transcriptPath: string;

    @CreateDateColumn()
    submittedAt: Date;
}