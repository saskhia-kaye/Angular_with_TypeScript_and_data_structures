import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Route, RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { StudentListComponent } from "./components/student-list/student-list.component";
import { EmployeeComponent } from "./components/employee/employee.component";
import { FruitListComponent } from "./components/fruit-list/fruit-list.component";
import { CourseListComponent } from "./components/course-list/course-list.component";
import { BookListComponent } from "./components/book-list/book-list.component";
import { CityListComponent } from "./components/city-list/city-list.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { CarModelListComponent } from "./components/car-model-list/car-model-list.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { SubjectListComponent } from "./components/subject-list/subject-list.component";
import { CountryListComponent } from "./components/country-list/country-list.component";
import { SportsListComponent } from "./components/sports-list/sports-list.component";
import { VegetableListComponent } from "./components/vegetable-list/vegetable-list.component";
import { AnimalListComponent } from "./components/animal-list/animal-list.component";
import { ToolListComponent } from "./components/tool-list/tool-list.component";
import { LanguageListComponent } from "./components/language-list/language-list.component";
import { GameListComponent } from "./components/game-list/game-list.component";
import { SoftwareListComponent } from "./components/software-list/software-list.component";
import { PhoneContactListComponent } from "./components/phone-contact-list/phone-contact-list.component";
import { MusicPlaylistComponent } from "./components/music-playlist/music-playlist.component";
import { FoodMenuComponent } from "./components/food-menu/food-menu.component";
import { GroceryListComponent } from "./components/grocery-list/grocery-list.component";
import { ClassroomListComponent } from "./components/classroom-list/classroom-list.component";
import { InventoryListComponent } from "./components/inventory-list/inventory-list.component";
import { LectureListComponent } from "./components/lecture-list/lecture-list.component";
import { StationeryListComponent } from "./components/stationery-list/stationery-list.component";
import { FlowerListComponent } from "./components/flower-list/flower-list.component";
import { DestinationListComponent } from "./components/destination-list/destination-list.component";
import { LaptopListComponent } from "./components/laptop-list/laptop-list.component";
import { LaptopSpecificationListComponent } from "./components/laptop-specification-list/laptop-specification-list.component";
import { ComputerHardwareListComponent } from "./components/computer-hardware-list/computer-hardware-list.component";
import { MobileAppListComponent } from "./components/mobile-app-list/mobile-app-list.component";
import { VideoListComponent } from "./components/video-list/video-list.component";
import { TvShowListComponent } from "./components/tv-show-list/tv-show-list.component";
import { FurnitureListComponent } from "./components/furniture-list/furniture-list.component";
import { AccessoryListComponent } from "./components/accessory-list/accessory-list.component";
import { BuildingListComponent } from "./components/building-list/building-list.component";
import { PaintingListComponent } from "./components/painting-list/painting-list.component";
import { ArtistListComponent } from "./components/artist-list/artist-list.component";
import { ComposerListComponent } from "./components/composer-list/composer-list.component";
import { PodcastListComponent } from "./components/podcast-list/podcast-list.component";
import { ExerciseListComponent } from "./components/exercise-list/exercise-list.component";
import { MealPlanListComponent } from "./components/meal-plan-list/meal-plan-list.component";
import { BudgetListComponent } from "./components/budget-list/budget-list.component";
import { PresentationListComponent } from "./components/presentation-list/presentation-list.component";
import { TourListComponent } from "./components/tour-list/tour-list.component";
import { EventListComponent } from "./components/event-list/event-list.component";
import { DevelopmentToolsListComponent } from "./components/development-tools-list/development-tools-list.component";
import { FrameworkListComponent } from "./components/framework-list/framework-list.component";
import { LibraryListComponent } from "./components/library-list/library-list.component";



const routes: Routes = [
    {path: "", component: StudentListComponent},
    {path: "employee", component: EmployeeComponent},
    {path: "fruit-list", component: FruitListComponent},
    {path: "course-list", component: CourseListComponent},
    {path: "book-list", component: BookListComponent},
    {path: "city-list", component: CityListComponent},
    {path: "movie-list", component: MovieListComponent},
    {path: "car-model-list", component: CarModelListComponent},
    {path: "product-list", component: ProductListComponent},
    {path: "subject-list", component: SubjectListComponent},
    {path: "country-list", component: CountryListComponent},
    {path: "sports-list", component: SportsListComponent},
    {path: "vegetable-list", component: VegetableListComponent},
    {path: "animal-list", component: AnimalListComponent},
    {path: "tool-list", component: ToolListComponent},
    {path: "language-list", component: LanguageListComponent},
    {path: "game-list", component: GameListComponent},
    {path: "software-list", component: SoftwareListComponent},
    {path: "phone-contact-list", component: PhoneContactListComponent},
    {path: "music-playlist", component: MusicPlaylistComponent},
    {path: "food-menu", component: FoodMenuComponent},
    {path: "grocery-list", component: GroceryListComponent},
    {path: "classroom-list", component: ClassroomListComponent},
    {path: "inventory-list", component: InventoryListComponent},
    {path: "lecture-list", component: LectureListComponent},
    {path: "stationery-list", component: StationeryListComponent},
    {path: "flower-list", component: FlowerListComponent},
    {path: "destination-list", component: DestinationListComponent},
    {path: "laptop-list", component: LaptopListComponent},
    {path: "laptop-specification-list", component: LaptopSpecificationListComponent},
    {path: "computer-hardware-list", component: ComputerHardwareListComponent},
    {path: 'mobile-app-list', component: MobileAppListComponent},
    {path: "video-list", component: VideoListComponent},
    {path: "tv-show-list", component: TvShowListComponent},
    {path: "furniture-list", component: FurnitureListComponent},
    {path: "accessory-list", component: AccessoryListComponent},
    {path: "building-list", component: BuildingListComponent},
    {path: "painting-list", component: PaintingListComponent},
    {path: "artist-list", component: ArtistListComponent},
    {path: "composer-list", component: ComposerListComponent},
    {path: "podcast-list", component:PodcastListComponent},
    {path: "exercise-list", component: ExerciseListComponent},
    {path: "meal-plan-list", component: MealPlanListComponent},
    {path: "budget-list", component: BudgetListComponent},
    {path: "presentation-list", component: PresentationListComponent},
    {path: "tour-list", component: TourListComponent}, 
    {path: "event-list", component: EventListComponent},
    {path: "development-tools-list", component:DevelopmentToolsListComponent},
    {path: "framework-list", component: FrameworkListComponent},
    {path: "library-list", component: LibraryListComponent}



]





@NgModule({
    imports:[
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        RouterModule.forRoot(routes, {enableTracing:true})
    ],
    
    declarations:[
        AppComponent,
        StudentListComponent,
        EmployeeComponent,
        FruitListComponent,
        CourseListComponent,
        BookListComponent,
        CityListComponent,
        MovieListComponent,
        CarModelListComponent,
        ProductListComponent,
        SubjectListComponent,
        CountryListComponent,
        SportsListComponent, 
        VegetableListComponent,
        AnimalListComponent,
        ToolListComponent,
        LanguageListComponent,
        GameListComponent,
        SoftwareListComponent,
        PhoneContactListComponent,
        MusicPlaylistComponent,
        FoodMenuComponent,
        GroceryListComponent,
        ClassroomListComponent,
        InventoryListComponent,
        LectureListComponent,
        StationeryListComponent,
        FlowerListComponent,
        DestinationListComponent,
        LaptopListComponent,
        LaptopSpecificationListComponent,
        ComputerHardwareListComponent,
        MobileAppListComponent,
        VideoListComponent,
        TvShowListComponent,
        FurnitureListComponent,
        AccessoryListComponent,
        BuildingListComponent,
        PaintingListComponent,
        ArtistListComponent,
        ComposerListComponent,
        PodcastListComponent,
        ExerciseListComponent,
        MealPlanListComponent,
        BudgetListComponent,
        PresentationListComponent,
        TourListComponent,
        EventListComponent,
        DevelopmentToolsListComponent,
        FrameworkListComponent,
        LibraryListComponent,
    ],

    providers:[

    ],

    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}