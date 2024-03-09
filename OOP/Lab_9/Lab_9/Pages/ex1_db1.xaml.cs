﻿using Lab_9.Classes;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Lab_9.Pages
{
    /// <summary>
    /// Логика взаимодействия для ex1_db1.xaml
    /// </summary>
    public partial class ex1_db1 : Page
    {
        private readonly CodeFirstContext db;
        public ex1_db1()
        {
            InitializeComponent();

            var context = new CodeFirstContext();
            context.Database.EnsureCreated(); // Создаем базу данных, если ее нет

            db = new CodeFirstContext();
            db.Peoples.Load();
            peopleGrid.ItemsSource = db.Peoples.Local.ToBindingList(); // устанавливаем привязку к кэшу
        }

        private void updateButton_Click(object sender, RoutedEventArgs e)
        {
            db.SaveChanges();
        }

        private void deleteButton_Click(object sender, RoutedEventArgs e)
        {
            if (peopleGrid.SelectedItems.Count > 0)
            {
                for (int i = 0; i < peopleGrid.SelectedItems.Count; i++)
                {
                    InfoAboutPeople per = peopleGrid.SelectedItems[i] as InfoAboutPeople;
                    if (per != null)
                    {
                        db.Peoples.Remove(per);
                    }
                }
            }
            db.SaveChanges();
        }
    }
}
