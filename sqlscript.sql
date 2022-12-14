USE [master]
GO
/****** Object:  Database [onSpot]    Script Date: 07/09/2022 21:19:06 ******/
CREATE DATABASE [onSpot]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'onSpot', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\onSpot.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'onSpot_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\onSpot_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [onSpot] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [onSpot].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [onSpot] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [onSpot] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [onSpot] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [onSpot] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [onSpot] SET ARITHABORT OFF 
GO
ALTER DATABASE [onSpot] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [onSpot] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [onSpot] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [onSpot] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [onSpot] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [onSpot] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [onSpot] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [onSpot] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [onSpot] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [onSpot] SET  DISABLE_BROKER 
GO
ALTER DATABASE [onSpot] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [onSpot] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [onSpot] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [onSpot] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [onSpot] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [onSpot] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [onSpot] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [onSpot] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [onSpot] SET  MULTI_USER 
GO
ALTER DATABASE [onSpot] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [onSpot] SET DB_CHAINING OFF 
GO
ALTER DATABASE [onSpot] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [onSpot] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [onSpot] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [onSpot] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [onSpot] SET QUERY_STORE = OFF
GO
USE [onSpot]
GO
/****** Object:  Table [dbo].[Attendency]    Script Date: 07/09/2022 21:19:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Attendency](
	[Id] [nchar](10) NOT NULL,
	[Enter] [nchar](10) NULL,
	[Exit] [nchar](10) NULL,
	[Date] [nchar](10) NULL,
	[UserId] [nchar](10) NULL,
	[CourseId] [nchar](10) NULL,
 CONSTRAINT [PK_Attendency] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Course]    Script Date: 07/09/2022 21:19:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Course](
	[Id] [int] NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[NumOfLessons] [int] NOT NULL,
 CONSTRAINT [PK_Course] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Lesson]    Script Date: 07/09/2022 21:19:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Lesson](
	[Id] [int] NOT NULL,
	[date] [date] NULL,
	[start] [time](7) NULL,
	[finish] [time](7) NULL,
 CONSTRAINT [PK_StudentToLesson] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LessonToCourse]    Script Date: 07/09/2022 21:19:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LessonToCourse](
	[Id] [int] NOT NULL,
	[CourseId] [int] NULL,
	[LessonId] [int] NULL,
 CONSTRAINT [PK_LessonToCourse] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StudentToCourse]    Script Date: 07/09/2022 21:19:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StudentToCourse](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[CourseId] [int] NOT NULL,
	[Id] [int] NOT NULL,
 CONSTRAINT [PK_StudentToCourse] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 07/09/2022 21:19:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[Id] [int] NOT NULL,
	[FName] [varchar](50) NULL,
	[LName] [varchar](50) NULL,
	[Phone] [int] NULL,
	[Email] [varchar](50) NULL,
	[Address] [varchar](50) NULL,
	[City] [nchar](10) NULL,
	[BDate] [date] NULL,
	[UserName] [varchar](50) NULL,
	[Status] [bit] NULL,
	[AllowingAccess] [bit] NULL,
	[password] [nchar](10) NULL,
 CONSTRAINT [PK_Student] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Course]  WITH CHECK ADD  CONSTRAINT [FK_Course_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([Id])
GO
ALTER TABLE [dbo].[Course] CHECK CONSTRAINT [FK_Course_User]
GO
ALTER TABLE [dbo].[LessonToCourse]  WITH CHECK ADD  CONSTRAINT [FK_LessonToCourse_Course] FOREIGN KEY([CourseId])
REFERENCES [dbo].[Course] ([Id])
GO
ALTER TABLE [dbo].[LessonToCourse] CHECK CONSTRAINT [FK_LessonToCourse_Course]
GO
ALTER TABLE [dbo].[LessonToCourse]  WITH CHECK ADD  CONSTRAINT [FK_LessonToCourse_Lesson] FOREIGN KEY([LessonId])
REFERENCES [dbo].[Lesson] ([Id])
GO
ALTER TABLE [dbo].[LessonToCourse] CHECK CONSTRAINT [FK_LessonToCourse_Lesson]
GO
ALTER TABLE [dbo].[StudentToCourse]  WITH CHECK ADD  CONSTRAINT [FK_StudentToCourse_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([Id])
GO
ALTER TABLE [dbo].[StudentToCourse] CHECK CONSTRAINT [FK_StudentToCourse_User]
GO
USE [master]
GO
ALTER DATABASE [onSpot] SET  READ_WRITE 
GO
