﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

namespace Persistence.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20200724050340_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.6");

            modelBuilder.Entity("Domain.Value", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Values");

                    b.HasData(
                        new
                        {
                            Id = new Guid("b8537154-6b33-4490-a067-51804301e055"),
                            Name = "Value 101"
                        },
                        new
                        {
                            Id = new Guid("e0318b89-23ae-4aaf-bdb7-9e551e23bd82"),
                            Name = "Value 102"
                        },
                        new
                        {
                            Id = new Guid("edef0304-3c9e-453c-ba57-be54c83263d0"),
                            Name = "Value 103"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
